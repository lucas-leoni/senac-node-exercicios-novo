const ServicoExercicio = require('../services/exercicio');

const servico = new ServicoExercicio();

class ControllerExercicio {
  Somar(req, res) {
    try {
      const result = servico.Somar(req.body.num1, req.body.num2);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ControllerExercicio;
