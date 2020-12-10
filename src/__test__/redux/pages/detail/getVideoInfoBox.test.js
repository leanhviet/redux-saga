// Libs
import Video, { Types } from '../../../../pages/Detail/redux/videoInfoBox'

describe('Test redux for VideoInfoBox in Detail page', () => {
  it('should return default state', () => {
    const state = {
      fetching: false,
      video: {},
      error: null,
      type: null
    }

    expect(Video(undefined, {})).toEqual(state)
  })

  describe('Test redux get video', () => {
    it('should return get video request state', () => {
      const action = {
        type: Types.GET_VIDEO_BY_ID_REQUEST
      }
      const prevState = {
        fetching: false,
        video: {},
        error: null,
        type: null
      }
      const state = {
        fetching: true,
        video: {},
        error: null,
        type: Types.GET_VIDEO_BY_ID_REQUEST
      }

      expect(Video(prevState, action)).toEqual(state)
    })

    it('should return get video success state', () => {
      const mockVideo = {
        title: 'test',
        viewNumber: '627',
        likeNumber: '542',
        dislikeNumber: '124',
        channelName: 'viet',
        desc: 'description about animal'
      }
      const video = {
        snippet: {
          title: mockVideo.title,
          channelTitle: mockVideo.channelName,
          publishedAt: '2019-07-06T11:42:44.000Z',
          description: mockVideo.desc
        },
        statistics: {
          viewCount: mockVideo.viewNumber,
          likeCount: mockVideo.likeNumber,
          dislikeCount: mockVideo.dislikeNumber
        }
      }
      const action = {
        type: Types.GET_VIDEO_BY_ID_SUCCESS,
        video
      }
      const prevState = {
        fetching: true,
        video: {},
        error: null,
        type: null
      }
      const videoExpect = {
        title: mockVideo.title,
        viewNumber: mockVideo.viewNumber,
        likeNumber: mockVideo.likeNumber,
        dislikeNumber: mockVideo.dislikeNumber,
        channelName: mockVideo.channelName,
        publishedTime: 'July 6, 2019',
        desc: mockVideo.desc
      }
      const stateExpect = {
        fetching: false,
        video: videoExpect,
        error: null,
        type: Types.GET_VIDEO_BY_ID_SUCCESS
      }

      expect(Video(prevState, action)).toEqual(stateExpect)
    })

    it('should return get video failure state', () => {
      const error = 'Get video failure'
      const action = {
        type: Types.GET_VIDEO_BY_ID_FAILURE,
        error
      }
      const prevState = {
        fetching: true,
        video: {},
        error: null,
        type: null
      }
      const stateExpect = {
        fetching: false,
        video: {},
        error,
        type: Types.GET_VIDEO_BY_ID_FAILURE
      }

      expect(Video(prevState, action)).toEqual(stateExpect)
    })
  })
})
