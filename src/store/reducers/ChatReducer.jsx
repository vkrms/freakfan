import {
  FETCH_CHAT_USERS_START,
  FETCH_CHAT_USERS_SUCCESS,
  FETCH_CHAT_USERS_FAILURE,
  FETCH_CHAT_MESSAGE_START,
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE,
  ADD_MESSAGE_CONTENT,
  SAVE_CHAT_USERS_START,
  SAVE_CHAT_USERS_SUCCESS,
  SAVE_CHAT_USERS_FAILURE,
  ADD_MESSAGE_CONTENT_START,
  ADD_MESSAGE_CONTENT_SUCCESS,
  SEND_BULK_MESSAGE_START,
  SEND_BULK_MESSAGE_SUCCESS,
  SEND_BULK_MESSAGE_FAILURE,
} from "../actions/ActionConstant";

const initialState = {
  chatUsers: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
  },
  saveChatUser: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    loadingButtonContent: null,
    buttonDisable: false,
  },
  messages: {
    data: {
      messages: [],
      user: {},
    },
    loading: false,
    error: false,
    inputData: {},
    loadingButtonContent: null,
    buttonDisable: false,
    skip: 0,
    length: 0,
    fetchMoreFlag : null,
    loadMoreLoading : null,
  },
  bulkMessages: {
    data: {},
    loading: true,
    error: false,
    inputData: {},
    buttonDisable: false,
    loadingButtonContent: null,
  },
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_USERS_START:
      return {
        ...state,
        chatUsers: {
          inputData: action.data,
          data: {},
          loading: true,
          error: false,
        },
      };
    case FETCH_CHAT_USERS_SUCCESS:
      return {
        ...state,
        chatUsers: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
        },
      };
    case FETCH_CHAT_USERS_FAILURE:
      return {
        ...state,
        chatUsers: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
        },
      };
    case FETCH_CHAT_MESSAGE_START:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
          loadingButtonContent: "Loading... Please wait.",
          buttonDisable: true,
          skip: 0,
          length: 0,
          fetchMoreFlag : null
        },
      };
    case FETCH_CHAT_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
          skip: action.data.messages.length + state.messages.skip,
          length: action.data.messages.length,
          fetchMoreFlag : action.data.messages.length == action.data.total ? false : true,
        },
      };
    case FETCH_CHAT_MESSAGE_FAILURE:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
          fetchMoreFlag : action.data.total > 0 ? true : false,
        },
      };
    
    case ADD_MESSAGE_CONTENT_START:
      return {
        ...state,
        messages: {
          // data: {
          //   messages: [...state.messages.data.messages],
          // },
          ...state.messages,
          loading: false,
          error: false,
          inputData: action.data,
          loadingButtonContent: "Loading... Please wait.",
          buttonDisable: true,
          skip: state.messages.skip,
          length: state.messages.length,
          loadMoreLoading : true
        },
      };

    case ADD_MESSAGE_CONTENT:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {
            messages: [...state.messages.data.messages,...action.data],
            user: { ...state.messages.data.user },
          },
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };
      case ADD_MESSAGE_CONTENT_SUCCESS:
      return {
        ...state,
        messages: {
          ...state.messages,
          data: {
            messages: [...action.data.messages ,...state.messages.data.messages],
            user: { ...state.messages.data.user },
          },
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
          skip: action.data.messages.length + state.messages.skip,
          length: action.data.messages.length + state.messages.length,
          fetchMoreFlag : state.messages.length == action.data.total ? false : true,
          loadMoreLoading : false
        },
      };
      case SAVE_CHAT_USERS_START:
      return {
        ...state,
        saveChatUser: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
          loadingButtonContent: "Loading... Please wait.",
          buttonDisable: true,
        },
      };
    case SAVE_CHAT_USERS_SUCCESS:
      return {
        ...state,
        saveChatUser: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };
    case SAVE_CHAT_USERS_FAILURE:
      return {
        ...state,
        saveChatUser: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          loadingButtonContent: null,
          buttonDisable: false,
        },
      };
    case SEND_BULK_MESSAGE_START:
      return {
        ...state,
        bulkMessages: {
          data: {},
          loading: true,
          error: false,
          inputData: action.data,
          buttonDisable: true,
          loadingButtonContent: "Loading...",
        },
      };
    case SEND_BULK_MESSAGE_SUCCESS:
      return {
        ...state,
        bulkMessages: {
          data: action.data,
          loading: false,
          error: false,
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: "Send",
        },
      };
    case SEND_BULK_MESSAGE_FAILURE:
      return {
        ...state,
        bulkMessages: {
          data: {},
          loading: true,
          error: action.error,
          inputData: {},
          buttonDisable: false,
          loadingButtonContent: "Send",
        },
      };
    

    default:
      return state;
  }
};

export default ChatReducer;
