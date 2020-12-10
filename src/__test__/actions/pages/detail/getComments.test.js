import { Types, Creators } from '../../../../pages/Detail/redux/comments'

describe('Test Detail page', () => {
  describe('Test get comments Detail page', () => {
    it('should return get comments request action', () => {
      const action = {
        type: Types.GET_COMMENTS_REQUEST
      }

      expect(Creators.getCommentsRequest()).toEqual(action)
    })

    it('should return get comments success action', () => {
      const comments = [
        {
          src: '',
          name: 'Le Anh Viet',
          content: '',
          likeNumber: '100',
          dislikeNumber: '50'
        }
      ]
      const action = {
        type: Types.GET_COMMENTS_SUCCESS,
        comments
      }

      expect(Creators.getCommentsSuccess(comments)).toEqual(action)
    })

    it('should return get comments failure action', () => {
      const error = 'Get comments failure'
      const action = {
        type: Types.GET_COMMENTS_FAILURE,
        error
      }

      expect(Creators.getCommentsFailure(error)).toEqual(action)
    })
  })
})
