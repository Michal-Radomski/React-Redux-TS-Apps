import React from "react";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

const AddArticle: React.FC<Props> = ({saveArticle}) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

  const handleArticleData = (event: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const addNewArticle = (event: React.FormEvent) => {
    event.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input type="text" id="title" placeholder="Title" onChange={handleArticleData} />
      <input type="text" id="body" placeholder="Description" onChange={handleArticleData} />
      <button disabled={article === undefined ? true : false}>Add article</button>
    </form>
  );
};

export default AddArticle;
