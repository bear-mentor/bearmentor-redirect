import { redirect } from "@remix-run/node";

import { redirectBaseURL } from "~/utils/env";

export type ConfigRedirect = {
  path: string;
  url?: string;
  to?: string;
};

export function redirectRouteToUrl(
  request: Request,
  configRedirects: ConfigRedirect[]
) {
  const url = new URL(request.url);
  const path = url.pathname;

  const foundItem = configRedirects.find((item) => item.path.trim() === path);

  if (!foundItem) return redirect(`${redirectBaseURL}/${path}`);

  if (foundItem.url && !foundItem.to) return redirect(foundItem.url);

  if (!foundItem.url && foundItem.to) return redirect(foundItem.to);

  return null;
}
