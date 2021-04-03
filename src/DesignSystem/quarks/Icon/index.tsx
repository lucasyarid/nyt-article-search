import {
  AiOutlineSearch,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai'

export enum IconOptions {
  MAGNIFYING_GLASS = 'MagnifyingGlass',
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

export default {
  [IconOptions.MAGNIFYING_GLASS]: AiOutlineSearch,
  [IconOptions.ARROW_UP]: AiOutlineUp,
  [IconOptions.ARROW_DOWN]: AiOutlineDown,
  [IconOptions.ARROW_LEFT]: AiOutlineLeft,
  [IconOptions.ARROW_RIGHT]: AiOutlineRight,
}
