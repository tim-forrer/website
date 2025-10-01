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
            dangerous_inner_html: html,
        }
        div {
            Link { to: Route::ProjectsTop, "Back to projects ↩" }
        }
    )
}
