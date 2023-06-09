import { inline as i} from "./inline.js"
import defaultInline from  "./inline.js"
import exportDefault, { group } from "./non-inline.js"

i()
defaultInline()

group()
exportDefault()