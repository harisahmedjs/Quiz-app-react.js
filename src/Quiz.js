export default {
 name :'quiz',
 title : 'Quiz',
 type : 'document',
  fields : [
    {
        name : 'question',
        title : 'Question',
        type : 'string',
        Validation : Rule => Rule.required()
    },
    {
      name : 'option',
      title : 'Option',
      type : 'Array',
      of: [
        {
            type : 'string'
        }
      ] ,
      Validation : Rule => Rule.min(2).max(4).required()
    },
    {
        name : 'correctanswer',
        title : 'Correctanswer',
        type : 'string',
        Validation : Rule => Rule.max(1).required()
    }, 
    {
        name : 'description',
        title : 'Description',
        type : 'string',
        Validation : Rule => Rule.required()
    }
  ]
}