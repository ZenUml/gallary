import Vue from 'vue'
import Vuex from 'vuex'
import { VueSequence } from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'
import { useEffect, useRef } from 'react'

console.log('Vue', Vue, Vuex)
console.log('VueSequence', VueSequence)
Vue.use(Vuex)
const store = new Vuex.Store(VueSequence.Store())
store.commit('code', 'A.m')
/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */
const ZenUML = ({ code }) => {
  store.commit('code', code)
  const localRef = useRef(null)

  useEffect(() => {
    new Vue({
      el: localRef.current,
      store,
      render: function (h) {
        return h(VueSequence.DiagramFrame)
      },
    })
  })
  return (
    <>
      <div ref={localRef}></div>
    </>
  )
}

export default ZenUML
