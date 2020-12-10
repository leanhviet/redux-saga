import { Types, Creators } from '../../../../pages/Home/redux/videos'

describe('Test Home page', () => {
  describe('Test get videos Home page', () => {
    it('should return get videos request action', () => {
      const action = {
        type: Types.GET_VIDEOS_REQUEST
      }

      expect(Creators.getVideosRequest()).toEqual(action)
    })

    it('should return get videos success action', () => {
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
        type: Types.GET_VIDEOS_SUCCESS,
        videos
      }

      expect(Creators.getVideosSuccess(videos)).toEqual(action)
    })

    it('should return get videos failure action', () => {
      const error = 'Get videos failure'
      const action = {
        type: Types.GET_VIDEOS_FAILURE,
        error
      }

      expect(Creators.getVideosFailure(error)).toEqual(action)
    })
  })

  describe('Test get videos by keyword', () => {
    it('should return get videos by keyword request action', () => {
      const action = {
        type: Types.GET_VIDEOS_BY_KEY_WORD_REQUEST
      }

      expect(Creators.getVideosByKeyWordRequest()).toEqual(action)
    })

    it('should return get videos by keyword success action', () => {
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
        type: Types.GET_VIDEOS_BY_KEY_WORD_SUCCESS,
        videos
      }

      expect(Creators.getVideosByKeyWordSuccess(videos)).toEqual(action)
    })

    it('should return get videos by keyword failure action', () => {
      const error = 'Get videos by keyword failure'
      const action = {
        type: Types.GET_VIDEOS_BY_KEY_WORD_FAILURE,
        error
      }

      expect(Creators.getVideosByKeyWordFailure(error)).toEqual(action)
    })
  })
})
