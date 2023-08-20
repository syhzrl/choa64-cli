import React, { FunctionComponent, useEffect, useState } from 'react';
import { EditorContent, mergeAttributes, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Highlight from '@tiptap/extension-highlight';

import BoldIcon from './assets/icons/BoldIcon';

type Levels = 1 | 2 | 3 | 4 | 5 | 6

const classes: Record<Levels, string> = {
    1: 'text-5xl font-bold my-2',
    2: 'text-4xl font-bold my-2',
    3: 'text-3xl font-bold my-2',
    4: 'text-2xl font-bold my-2',
    5: 'text-xl font-bold my-2',
    6: 'text-lg font-bold my-2',
};

const App: FunctionComponent = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: false,
                paragraph: {
                    HTMLAttributes: {
                        class: 'my-2',
                    },
                },
                code: {
                    HTMLAttributes: {
                        class: 'bg-[#616161]/[0.1] text-[#616161]',
                    },
                },
                codeBlock: {
                    HTMLAttributes: {
                        class: 'bg-[#0D0D0D] text-white p-2 rounded-md',
                    },
                },
                blockquote: {
                    HTMLAttributes: {
                        class: 'pl-4 border-l-2 border-l-[#0D0D0D]/[0.1]',
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'px-5 list-disc my-4',
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: 'px-5 list-decimal my-4',
                    },
                },
                listItem: {
                    HTMLAttributes: {
                        class: '',
                    },
                },
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }).extend({
                renderHTML(this, { node, HTMLAttributes }) {
                    const { options } = this;
                    const hasLevel = options.levels.includes(node.attrs.level);
                    const level: Levels = hasLevel ? node.attrs.level : options.levels[0];
                    return [
                        `h${level}`,
                        mergeAttributes(options.HTMLAttributes, HTMLAttributes, {
                            class: `${classes[level]}`,
                        }),
                        0,
                    ];
                },
            }),
            Highlight.configure({
                HTMLAttributes: {
                    class: 'bg-[#faf594]',
                },
            }),
        ],
        content: `
            <h1>This is a 1st level heading</h1>
            <h2>This is a 2nd level heading</h2>
            <h3>This is a 3rd level heading</h3>
            <h4>This is a 4rd level heading</h4>
            <h5>This is a 5rd level heading</h5>
            <h6>This is a 6rd level heading</h6>
            
            <p>This is a paragraph</p>
            
            <pre><code>THIS IS A CODE BLOCK</code></pre>
            
            <p><code>THIS IS JUST A CODE LINE</p></code>

            <p><strong>THIS IS JUST A strong LINE</p></strong>

            <p><s>THIS IS JUST A s LINE</p></s>

            <p><mark>THIS IS JUST A s LINE</mark></p>
            
            <blockquote>
                This is a quote block!!!🤘
            </blockquote>

            <ul>
                <li>LIST ITEM 1</li>
                <li>LIST ITEM 2</li>
                <li>LIST ITEM 3</li>
            </ul>

            <ol>
                <li>LIST ITEM 1</li>
                <li>LIST ITEM 2</li>
                <li>LIST ITEM 3</li>
            </ol>
        `,
        editorProps: {
            attributes: {
                class: 'w-full p-4 focus:outline-none text-black overflow-y-auto',
            },
        },
    });

    if (!editor || editor.isDestroyed) {
        return null;
    }

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-orange-400'>
            <h1 className='text-5xl text-black font-bold'>
                TIP TAP
            </h1>

            <div
                className='w-[80%] bg-white flex flex-col items-center justify-start h-[70%] border border-black rounded-sm my-4'
            >
                <div className='w-full flex gap-2 border-b border-b-black bg-orange-500'>
                    <button
                        className='text-black flex items-center justify-center bg-orange-500 p-2'
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <BoldIcon />
                    </button>

                    <button
                        className='text-black flex items-center justify-center bg-orange-500 p-2'
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <BoldIcon />
                    </button>

                    <button
                        className='text-black flex items-center justify-center bg-orange-500 p-2'
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <BoldIcon />
                    </button>
                </div>
                <EditorContent
                    className='w-full flex flex-col items-center justify-start overflow-y-auto'
                    editor={editor}
                />
            </div>
        </div>
    );
};

export default App;
