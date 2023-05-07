import React from 'react'
import CheckListsExample from './CheckList'
import CodeHighlightingExample from './code-highlighting'
import MarkdownShortcutsExample from './markdown-shortcuts'

function TextEditor () {
  return (
    <div className=' flex flex-col'>
        <CheckListsExample/>
        <MarkdownShortcutsExample/>
    </div>
  )
}

export default TextEditor
