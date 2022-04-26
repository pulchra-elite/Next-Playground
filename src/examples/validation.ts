export const queryCode = `query {
    getPostDocument(relativePath: "hello-world.md") {
      data {
        title
        description
      }
    }
  }`;
  
export const reactCode = `import * as React from 'react'
import { useTina } from 'tinacms/dist/edit-state'
  
export default function Page(props) {
  const {data, isLoading} = useTina({ query: \`query {
  getPostDocument(relativePath: "hello-world.md") {
    data {
      title
      description
    }
  }
}\`, 
    variables: {}, 
    data: props.data
  })

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl mb-4">
          <span className="block">{data.getPostDocument.data.title}</span>
        </h2>
        <div>
          Description:  {data.getPostDocument.data.description}
        </div>
      </div>
    </div>
  )
}`;
  
  export const schemaCode = `import { defineSchema } from 'tinacms'
  
  export default defineSchema({
    collections: [{
      label: "Post",
      name: "post",
      path: "posts",
      fields: [
        {
            label: "Title",
            name: "title",
            type: "string",
            ui: {
              validate: (value, data)=>{
                const lengthOfTitle = value?.length || 0
   //  We have access to value of description by using data?.<Name of field>
                const lengthOfDescription = data?.description?.length || 0
                if(lengthOfTitle >= lengthOfDescription){
                  return 'The description must be longer than the title'
                }
              }
            }
         },
         {
           label: "Description",
           name: "description",
           type: "string",
           ui: {
            validate: (val) => {
                if (val?.length < 5) {
                  return "Description must be more then 5 characters"
                }
              }
           }
         },
      ],
    }]
  })`;
  
  export const markdownCode = `---
title: Hello, Again!
description: This is a description
---`
  
  