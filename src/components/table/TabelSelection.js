export class TabelSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.focus().addClass(TabelSelection.className)
    this.group.push($el)
    this.current = $el
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TabelSelection.className))
    this.group = []
  }

  selectGroup($cells = []) {
    this.clear()
    this.group = $cells
    this.group.forEach($el => $el.addClass(TabelSelection.className))
  }
}
