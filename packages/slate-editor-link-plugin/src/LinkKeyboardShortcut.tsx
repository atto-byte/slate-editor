import { keyboardEvent } from 'packages/slate-editor-utils';
import { insertLinkStrategy } from './LinkUtils';


const LinkKeyboardShortcut = (event, change) => {
  if (keyboardEvent.isMod(event) && event.key === 'k') return insertLinkStrategy(change)
  return
}

export default LinkKeyboardShortcut
