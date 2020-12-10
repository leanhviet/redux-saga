import { Types, Creators } from '../../../../pages/Detail/redux/relatedVideos'

describe('Test Related Videos in Detail page', () => {
  describe('Test get related videos Detail page', () => {
    it('should return get related videos request action', () => {
      const action = {
        type: Types.GET_RELATED_VIDEOS_REQUEST
      }

      expect(Creators.getRelatedVideosRequest()).toEqual(action)
    })

    it('should return get related videos success action', () => {
      const videos = [
        {
          id: '',
          img: '',
          timeout: '05:09',
          title: 'Hope',
          publishedTime: '1 day ago',
          channelName: 'Le Van A',
          numberOfViews: '1,000,500'
        }
      ]
      const action = {
        type: Types.GET_RELATED_VIDEOS_SUCCESS,
        videos
      }

      expect(Creators.getRelatedVideosSuccess(videos)).toEqual(action)
    })

    it('should return get related videos failure action', () => {
      const error = 'Get related videos failure'
      const action = {
        type: Types.GET_RELATED_VIDEOS_FAILURE,
        error
      }

      expect(Creators.getRelatedVideosFailure(error)).toEqual(action)
    })
  })
})
