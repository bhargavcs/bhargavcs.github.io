import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"
import { Explorer } from "@quartz-community/explorer"
import CopyEmail from "./quartz/components/CopyEmail"

const config = await loadQuartzConfig()
export default config

// Sidebar labels live here. Full page titles remain in each Markdown file.
// Keep this function self-contained: Quartz also runs it in the browser.
const explorer = Explorer({
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: false,
  mapFn: (node) => {
    const labels: Record<string, string> = {
      index: "Home",
      research: "Research",
      resources: "Resources",
      talks: "Talks",
      "research/factoring-algebraic-complexity": "Factoring survey",
      "research/monotone-homomorphism-polynomials": "Homomorphism polynomials",
      "research/learning-coefficients": "Circuit factoring",
      "research/sum-of-algebraic-branching-programs": "Sums of branching programs",
      "research/constant-depth-algebraic-circuits": "Constant-depth circuits",
      "research/phd-thesis": "PhD thesis",
      "research/geometry-of-polynomials": "Master’s thesis",
      "talks/2019-08-31-tutorial-expanders": "Expanders tutorial",
      "talks/2019-09-07-talk-ramanujan": "Ramanujan graphs",
    }
    const path = (node.slugSegments ?? []).join("/")
    if (labels[path]) node.displayName = labels[path]
    return node
  },
})

export const layout = await loadQuartzLayout()
layout.defaults.afterBody = [...(layout.defaults.afterBody ?? []), CopyEmail]
for (const pageLayout of Object.values(layout.byPageType)) {
  if (pageLayout.afterBody) pageLayout.afterBody = [...pageLayout.afterBody, CopyEmail]
}
layout.defaults.left = [...(layout.defaults.left ?? []), explorer]
for (const [type, pageLayout] of Object.entries(layout.byPageType)) {
  if (type !== "404" && pageLayout.left) {
    pageLayout.left = [...pageLayout.left, explorer]
  }
}

config.plugins.emitters = config.plugins.emitters.filter((plugin) => plugin.name !== "PageTypeDispatcher")
config.plugins.emitters.push(PageTypeDispatcher({ defaults: layout.defaults, byPageType: layout.byPageType }))
