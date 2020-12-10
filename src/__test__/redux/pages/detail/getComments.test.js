// Libs
import Commnents, { Types } from '../../../../pages/Detail/redux/comments'

describe('Test redux for Comments in Detail page', () => {
  it('should return default state', () => {
    const state = {
      fetching: false,
      comments: [],
      error: null,
      type: null
    }

    expect(Commnents(undefined, {})).toEqual(state)
  })

  describe('Test redux get comments', () => {
    it('should return get comments request state', () => {
      const action = {
        type: Types.GET_COMMENTS_REQUEST
      }
      const prevState = {
        fetching: false,
        comments: [],
        error: null,
        type: null
      }
      const state = {
        fetching: true,
        comments: [],
        error: null,
        type: Types.GET_COMMENTS_REQUEST
      }

      expect(Commnents(prevState, action)).toEqual(state)
    })

    it('should return get comments success state', () => {
      const mockComment = {
        id: '12312',
        src: 'https://i.ytimg.com/vi/ghJktw2i93E/mqdefault.jpg',
        name: 'ST MTP',
        content: 'viet',
        likeNumber: 125,
        dislikeNumber: '2'
      }
      const comments = [
        {
          id: mockComment.id,
          snippet: {
            topLevelComment: {
              snippet: {
                authorProfileImageUrl: mockComment.src,
                authorDisplayName: mockComment.name,
                textOriginal: mockComment.content,
                likeCount: mockComment.likeNumber
              }
            }
          }
        }
      ]
      const action = {
        type: Types.GET_COMMENTS_SUCCESS,
        comments
      }
      const prevState = {
        fetching: true,
        comments: [],
        error: null,
        type: null
      }
      const commentsExpect = [
        {
          id: mockComment.id,
          src: mockComment.src,
          name: mockComment.name,
          content: mockComment.content,
          likeNumber: mockComment.likeNumber,
          dislikeNumber: '2'
        }
      ]
      const stateExpect = {
        fetching: false,
        comments: commentsExpect,
        error: null,
        type: Types.GET_COMMENTS_SUCCESS
      }

      expect(Commnents(prevState, action)).toEqual(stateExpect)
    })

    it('should return get comments failure state', () => {
      const error = 'Get comments failure'
      const action = {
        type: Types.GET_COMMENTS_FAILURE,
        error
      }
      const prevState = {
        fetching: true,
        comments: [],
        error: null,
        type: null
      }
      const stateExpect = {
        fetching: false,
        comments: [],
        error,
        type: Types.GET_COMMENTS_FAILURE
      }

      expect(Commnents(prevState, action)).toEqual(stateExpect)
    })
  })
})
