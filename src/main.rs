use dioxus::prelude::*;

use components::{Gallery, Home, Page404, Projects, Shell};

/// Define a components module that contains all shared components for our app.
mod components;

const FAVICON: Asset = asset!("/assets/favicon.svg");
const _: Asset = asset!("/assets/tailwind.css");
const _: Asset = asset!("/assets/main.css");

#[derive(Routable, PartialEq, Clone)]
enum Route {
    #[layout(Shell)]
    #[route("/")]
    Home,

    #[route("/projects")]
    Projects,

    #[route("/gallery")]
    Gallery,

    #[route("/:..route")]
    Page404 { route: Vec<String> },
}

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Title { "Tim Forrer" }
        document::Link { rel: "icon", href: FAVICON }

        div {
            class: "h-screen p-2 sm:px-30 sm:py-10 bg-df-bg dark:bg-nf-bg text-df-text dark:text-nf-text",
            Router::<Route> {}
        }

    }
}
