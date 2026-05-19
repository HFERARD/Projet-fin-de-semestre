import { useLocation, A } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Accueil</A>
        </li>
        <li class={`border-b-2 ${active("/client")} mx-1.5 sm:mx-6`}>
          <A href="/client">Client</A>
        </li>
        <li class={`border-b-2 ${active("/admin")} mx-1.5 sm:mx-6`}>
          <A href="/admin">Administrateur</A>
        </li>
        <li class={`border-b-2 ${active("/map")} mx-1.5 sm:mx-6`}>
          <A href="/map">Carte du parking</A>
        </li>
      </ul>
    </nav>
  );
}

