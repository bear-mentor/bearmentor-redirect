import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { configRedirects } from "~/configs/redirects";

export const meta: MetaFunction = () => {
  return [{ title: "Redirects" }];
};

export const loader = () => {
  const redirects = configRedirects;
  return json({ redirects });
};

export default function RedirectsRoute() {
  const { redirects } = useLoaderData<typeof loader>();

  return (
    <div className="site-container">
      <section className="site-section prose-config">
        <ul>
          {redirects.map((redirectItem) => (
            <li key={redirectItem.path}>
              <Link to={redirectItem.path}>
                <code>{redirectItem.path}</code>
              </Link>

              <span className="text-muted-foreground"> &rarr; </span>

              {redirectItem.url && (
                <a href={redirectItem.url} target="_blank" rel="noreferrer">
                  <code>{redirectItem.url}</code>
                </a>
              )}
              {redirectItem.to && (
                <Link to={redirectItem.to}>
                  <code>{redirectItem.to}</code>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
