

var sqsFanout = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsFanout-${opt:stage}',
    }
  }

  var sqsCadastrarLivro = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsTeste-${opt:stage}',
    }
  }
  var sqsDetalhesLivro = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsTeste-${opt:stage}',
    }
  }
  var sqsEditarLivro = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsTeste-${opt:stage}',
    }
  }

export default {
    sqsFanout,
    sqsCadastrarLivro,
    sqsDetalhesLivro,
    sqsEditarLivro
}