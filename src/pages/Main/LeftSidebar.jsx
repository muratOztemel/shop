import { useGetCategoriesQuery } from "../../redux/api/apiSlice";

const LeftSidebar = () => {
  const { data: categories, loading, error } = useGetCategoriesQuery();

  if (loading) return "Yükleniyor...";
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="categories md:mr-0 mr-[-24px] md:pr-0 pr-2">
      <ul className="category-list">
        {categories &&
          categories.map(({ _id, title }) => {
            return (
              <li className="category-item false" key={_id}>
                <div className="text-lg">{title}</div>
              </li>
            );
          })}

        <li className="category-item !bg-purple-800 hover:opacity-90">
          <span
            role="img"
            aria-label="plus"
            className="anticon anticon-plus md:text-2xl">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="plus"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true">
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
            </svg>
          </span>
        </li>
        <li className="category-item !bg-orange-800 hover:opacity-90">
          <span
            role="img"
            aria-label="edit"
            className="anticon anticon-edit md:text-2xl">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="edit"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true">
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
};
export default LeftSidebar;
