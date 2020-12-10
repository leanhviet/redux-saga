import { Types, Creators } from '../../../../pages/Detail/redux/videoInfoBox'

describe('Test VideoInfoBox in Detail page', () => {
  describe('Test get VideoInfoBox in Detail page', () => {
    it('should return get video request action', () => {
      const action = {
        type: Types.GET_VIDEO_BY_ID_REQUEST
      }

      expect(Creators.getVideoByIDRequest()).toEqual(action)
    })

    it('should return get video success action', () => {
      const video = {
        detailData: {
          videoInfo: {
            video: {
              title: 'West Super Bowl 2015',
              viewNumber: 0,
              likeNumber: '1,1k',
              dislikeNumber: '900k',
              channelName: 'Le Anh Viet',
              publishedTime: 'Published on Jun 4, 2019',
              desc: ''
            }
          }
        }
      }
      const action = {
        type: Types.GET_VIDEO_BY_ID_SUCCESS,
        video
      }

      expect(Creators.getVideoByIDSuccess(video)).toEqual(action)
    })

    it('should return get video failure action', () => {
      const error = 'Get video failure'
      const action = {
        type: Types.GET_VIDEO_BY_ID_FAILURE,
        error
      }

      expect(Creators.getVideoByIDFailure(error)).toEqual(action)
    })
  })
})
