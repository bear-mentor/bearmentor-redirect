import { redirect, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Bearmentor" },
    {
      name: "description",
      content:
        "Mentoring for people and organization. Get live technical help, various learning materials, and gain your income.",
    },
  ];
};

export async function loader() {
  return redirect("https://bearmentor.super.site");
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1>Bearmentor</h1>
    </div>
  );
}
