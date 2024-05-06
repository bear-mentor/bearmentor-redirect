import { type LoaderFunctionArgs } from "@remix-run/node";

import { configRedirects } from "~/configs/redirects";
import { redirectRouteToUrl } from "~/utils/redirect-route.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
  return redirectRouteToUrl(request, configRedirects);
};
