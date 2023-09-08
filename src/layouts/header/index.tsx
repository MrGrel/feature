import { useForm } from "react-hook-form";

interface IForm {
  search: string;
  categories: string;
  sorting: string;
}

export const Header = () => {
  const { handleSubmit, register } = useForm<IForm>();

  const onSubmit = (data: IForm) => {};

  return (
    <header>
      <div className="container">
        <h2>Search for books</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("search")} />
          <select {...register("categories")}>
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
          <select {...register("sorting")}>
            <option value="relevance">relevance</option>
            <option value="newst">newst</option>
          </select>
        </form>
      </div>
    </header>
  );
};
