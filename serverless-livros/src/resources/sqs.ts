

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
      QueueName: 'sqsCadastrarLivro-${opt:stage}',
    }
  }
  var sqsDetalhesLivro = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsDetalhesLivro-${opt:stage}',
    }
  }
  var sqsEditarLivro = {
    Type:'AWS::SQS::Queue',
    Properties:{
      DelaySeconds: 1,
      MaximumMessageSize: 1024,
      QueueName: 'sqsEditarLivro-${opt:stage}',
    }
  }

export default {
    sqsFanout,
    sqsCadastrarLivro,
    sqsDetalhesLivro,
    sqsEditarLivro
}