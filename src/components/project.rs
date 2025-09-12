use crate::Route;
use dioxus::prelude::*;
use gloo_net::http::RequestBuilder;

#[component]
pub fn Project(title: String) -> Element {
    let html = use_resource(move || {
        let title = title.clone();
        async move {
            RequestBuilder::new(&format!("/assets/projects/{title}.html"))
                .send()
                .await
                .unwrap()
                .text()
                .await
                .unwrap()
        }
    });

    rsx!(
        div {
            id: "typst-html",
            class: "prose max-w-none",
            dangerous_inner_html: html,
        }
        div {
            class: "mt-15",
            Link { to: Route::ProjectsTop, "Back to projects" }
        }
    )
}
