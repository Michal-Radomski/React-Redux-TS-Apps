import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },

    {
      id: 3,
      title: "post 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ],
};

const reducer = (state: ArticleState = initialState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.floor(Math.random() * 1000) + 3, // Random: 3 <= number < 1000
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter((article) => article.id !== action.article.id);
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
