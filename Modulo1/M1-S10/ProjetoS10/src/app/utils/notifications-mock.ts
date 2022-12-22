import { Notificacao } from "../models/notificacao.model";

export const NOTIFICACOES_MOCK: Notificacao[] = [
    {
      id: 1,
      titulo: "Olha a chuva!",
      subtitulo: "A chuva chegou! E seu almoço pode chegar em alguns cliques'",
      imagem: "assets/images/ifood.png",
      data: "Agora",
      lido: false,
    },
    {
      id: 1,
      titulo: "Tá ROLANDO, VEM!",
      subtitulo: "A black das blacks é só no Magalu! Toca aqui pra ver as MELHORES OFERTAS",
      imagem: "assets/images/magalu.png",
      data: "5m",
      lido: false,
    },
    {
      id: 1,
      titulo: "20% OFF",
      subtitulo: "Aproveite 20% off na sua primeira compra. Desconto valido por 24horas",
      imagem: "assets/images/amazon.png",
      data: "Agora",
      lido: false,
    },
  ]