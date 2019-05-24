import { keyboardEvent } from 'packages/slate-editor-utils';
import { boldMarkStrategy } from './BoldUtils';

const BoldKeyboardShortcut = (event, change) => {
  if (keyboardEvent.isMod(event) && event.key === 'b') return boldMarkStrategy(change)
  return
}

export default BoldKeyboardShortcut
