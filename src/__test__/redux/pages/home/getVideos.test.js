// Libs
import Videos, { Types } from '../../../../pages/Home/redux/videos'

import { dateFromNow, durationToTime } from '../../../../utils'

describe('Test redux for Home page', () => {
  it('should return default state', () => {
    const state = {
      fetching: false,
      videos: [],
      error: null,
      type: null
    }

    expect(Videos(undefined, {})).toEqual(state)
  })

  describe('Test redux get videos', () => {
    it('should return get videos request state', () => {
      const action = {
        type: Types.GET_VIDEOS_REQUEST
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
        type: Types.GET_VIDEOS_REQUEST
      }

      expect(Videos(prevState, action)).toEqual(state)
    })

    it('should return get videos success state', () => {
      const videos = [
        {
          id: '123',
          snippet: {
            thumbnails: {
              medium: {
                url: 'https://i.ytimg.com/vi/ghJktw2i93E/mqdefault.jpg',
                width: 320,
                height: 180
              }
            },
            title: 'test',
            channelTitle: 'viet',
            publishedAt: 'a day ago'
          },
          contentDetails: {
            duration: 'PT21M25S'
          },
          statistics: {
            viewCount: '627K'
          }
        }
      ]
      const action = {
        type: Types.GET_VIDEOS_SUCCESS,
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
          id: '123',
          img: 'https://i.ytimg.com/vi/ghJktw2i93E/mqdefault.jpg',
          title: 'test',
          channelName: 'viet',
          publishedTime: 'Invalid date',
          timeout: '21:25',
          numberOfViews: '627'
        }
      ]
      const stateExpect = {
        fetching: false,
        videos: videosExpect,
        error: null,
        type: Types.GET_VIDEOS_SUCCESS
      }

      expect(Videos(prevState, action)).toEqual(stateExpect)
    })

    it('should return get videos failure state', () => {
      const error = 'Get videos failure'
      const action = {
        type: Types.GET_VIDEOS_FAILURE,
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
        type: Types.GET_VIDEOS_FAILURE
      }

      expect(Videos(prevState, action)).toEqual(stateExpect)
    })
  })

  describe('Test redux get videos by keyword', () => {
    it('should return get videos by keyword request state', () => {
      const action = {
        type: Types.GET_VIDEOS_BY_KEY_WORD_REQUEST
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
        type: Types.GET_VIDEOS_BY_KEY_WORD_REQUEST
      }

      expect(Videos(prevState, action)).toEqual(state)
    })

    it('should return get videos by keyword success state', () => {
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
        type: Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS,
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
        type: Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS
      }

      expect(Videos(prevState, action)).toEqual(stateExpect)
    })

    it('should return get videos failure state', () => {
      const error = 'Get videos failure'
      const action = {
        type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE,
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
        type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE
      }

      expect(Videos(prevState, action)).toEqual(stateExpect)
    })
  })
})
