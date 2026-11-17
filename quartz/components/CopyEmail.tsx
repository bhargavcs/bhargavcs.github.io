import { QuartzComponent } from "./types"
// @ts-ignore: bundled as a browser script by Quartz
import script from "./scripts/copyEmail.inline"

const CopyEmail: QuartzComponent = () => null
CopyEmail.afterDOMLoaded = script

export default CopyEmail
