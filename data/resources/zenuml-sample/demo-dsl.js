const DSL = `headClass = methodStack.peekContainingClass() {
  return "peekMethod().map(PsiMember::getContainingClass)";
}`
export default DSL
