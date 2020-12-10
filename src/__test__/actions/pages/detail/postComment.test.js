import { Types, Creators } from '../../../../pages/Detail/redux/comments'

describe('Test post comment in Detail page', () => {
  describe('Test post comment Detail page', () => {
    it('should return post comment request action', () => {
      const action = {
        type: Types.POST_COMMENT_REQUEST
      }

      expect(Creators.postCommentRequest()).toEqual(action)
    })

    it('should return post comment success action', () => {
      const comment = {
        src: '',
        name: 'Le Anh Viet 2',
        content: '',
        likeNumber: '120',
        dislikeNumber: '60'
      }

      const action = {
        type: Types.POST_COMMENT_SUCCESS,
        comment
      }

      expect(Creators.postCommentSuccess(comment)).toEqual(action)
    })

    it('should return post comment failure action', () => {
      const error = 'Post comment failure'
      const action = {
        type: Types.POST_COMMENT_FAILURE,
        error
      }

      expect(Creators.postCommentFailure(error)).toEqual(action)
    })
  })
})
