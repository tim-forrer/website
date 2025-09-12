use crate::Route;
use dioxus::prelude::*;

#[component]
pub fn ProjectsTop() -> Element {
    let pages_list = vec!["typst"];
    rsx!(
        ul { class: "list-disc pl-5",
            for page in pages_list {
                {
                    rsx! {
                        li {
                            Link {
                                to: Route::Project {
                                    title: page.to_string(),
                                },
                                "{page}"
                            }
                        }
                    }
                }
            }
        }
    )
}
