use dioxus::prelude::*;

use components::{Gallery, Home, Page404, Projects, Shell};

/// Define a components module that contains all shared components for our app.
mod components;

const FAVICON: Asset = asset!("/assets/favicon.svg");
const MAIN_CSS: Asset = asset!("/assets/styling/main.css");
const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");

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
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: MAIN_CSS }
        document::Link { rel: "stylesheet", href: TAILWIND_CSS }

        Router::<Route> {}

    }
}
