// Libs
import RelatedVideos, {
  Types
} from '../../../../pages/Detail/redux/relatedVideos'

import { dateFromNow, durationToTime } from '../../../../utils'

describe('Test redux for RelatedVideos in Detail page', () => {
  it('should return default state', () => {
    const state = {
      fetching: false,
      videos: [],
      error: null,
      type: null
    }

    expect(RelatedVideos(undefined, {})).toEqual(state)
  })

  describe('Test redux get related videos', () => {
    it('should return get related videos request state', () => {
      const action = {
        type: Types.GET_RELATED_VIDEOS_REQUEST
      }
      const prevState = {
        fetching: false,
        videos: [],
        error: null,
        type: null
      }
      const state = {
        fetching: true,
        videos: [],
        error: null,
        type: Types.GET_RELATED_VIDEOS_REQUEST
      }

      expect(RelatedVideos(prevState, action)).toEqual(state)
    })

    it('should return get related videos success state', () => {
      const mockVideo = {
        id: '123',
        img: 'https://i.ytimg.com/vi/ghJktw2i93E/mqdefault.jpg',
        title: 'test',
        channelName: 'viet',
        numberOfViews: '627',
        publishedAt: '2019-07-06T11:42:44.000Z',
        duration: 'PT21M25S'
      }
      const videos = [
        {
          id: mockVideo.id,
          snippet: {
            thumbnails: {
              medium: {
                url: mockVideo.img,
                width: 320,
                height: 180
              }
            },
            title: mockVideo.title,
            channelTitle: mockVideo.channelName,
            publishedAt: mockVideo.publishedAt
          },
          contentDetails: {
            duration: mockVideo.duration
          },
          statistics: {
            viewCount: mockVideo.numberOfViews
          }
        }
      ]
      const action = {
        type: Types.GET_RELATED_VIDEOS_SUCCESS,
        videos
      }
      const prevState = {
        fetching: true,
        videos: [],
        error: null,
        type: null
      }
      const videosExpect = [
        {
          id: mockVideo.id,
          img: mockVideo.img,
          title: mockVideo.title,
          channelName: mockVideo.channelName,
          publishedTime: dateFromNow(mockVideo.publishedAt),
          timeout: durationToTime(mockVideo.duration),
          numberOfViews: mockVideo.numberOfViews
        }
      ]
      const stateExpect = {
        fetching: false,
        videos: videosExpect,
        error: null,
        type: Types.GET_RELATED_VIDEOS_SUCCESS
      }

      expect(RelatedVideos(prevState, action)).toEqual(stateExpect)
    })

    it('should return get related videos failure state', () => {
      const error = 'Get related videos failure'
      const action = {
        type: Types.GET_RELATED_VIDEOS_FAILURE,
        error
      }
      const prevState = {
        fetching: true,
        videos: [],
        error: null,
        type: null
      }
      const stateExpect = {
        fetching: false,
        videos: [],
        error,
        type: Types.GET_RELATED_VIDEOS_FAILURE
      }

      expect(RelatedVideos(prevState, action)).toEqual(stateExpect)
    })
  })
})
