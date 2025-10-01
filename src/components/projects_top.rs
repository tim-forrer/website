use crate::Route;
use std::collections::HashMap;
use dioxus::prelude::*;

#[component]
pub fn ProjectsTop() -> Element {
    let mut pages_map = HashMap::new();
    pages_map.insert("Building a Website in Rust".to_string(), "typst".to_string());

    rsx!(
        ul {
            for (title, page_name) in &pages_map {
                {
                    rsx! {
                        li {
                            Link {
                                to: Route::Project {
                                    title: page_name.to_string(),
                                },
                                "{title}"
                            }
                        }
                    }
                }
            }
        }
    )
}
