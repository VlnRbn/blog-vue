import { NavigationGuard, Route } from "vue-router";
import { getBlog } from "@/data/blogs";
import { blogUrlParser } from "@/shared";

const blogDetailResolver: NavigationGuard = async (
  to: Route,
  from: Route,
  next
) => {
  console.log(to.params);
  if (to.params["article"]) next();
  const { id } = blogUrlParser(to.params["slugUrl"]);
  if (id) {
    to.meta["article"] = await getBlog(id);
    next();
  }
  next();
};

export default blogDetailResolver;
