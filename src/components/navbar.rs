use crate::Route;
use dioxus::prelude::*;
use dioxus_free_icons::icons::fa_brands_icons;
use dioxus_free_icons::Icon;

const LOGO: Asset = asset!("/assets/favicon.svg");

#[component]
pub fn Shell() -> Element {
    rsx! {
        div {
            id: "navbar",
            class: "bg-df-select dark:bg-nf-select flex gap-5 items-center",
            Link { to: Route::Home, img { class: "size-10 m-1", src: LOGO } }
            Link { to: Route::ProjectsTop, "Projects" }
            Link { to: Route::Gallery, "Gallery" }
        }

        Outlet::<Route> {}

        footer {
            class: "flex gap-2 justify-center my-20",
            Link {
                to: "https://www.linkedin.com/in/timothy-f-46158b107/",
                Icon {
                    icon: fa_brands_icons::FaLinkedin,
                    class: "size-10",
                }
            }
            Link {
                to: "https://github.com/tim-forrer",
                Icon {
                    icon: fa_brands_icons::FaGithub,
                    class: "size-10",
                }
            }
        }
    }
}
