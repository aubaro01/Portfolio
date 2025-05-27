export const posts = [
    {
        id: '1',
        title: 'Projeto Sav',
        subtitle: 'Meu primeiro Projeto em React.js com Express.js e MongoDB',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
        images: [
            'https://raw.githubusercontent.com/aubaro01/SocorrosSav/main/public/sav.ico',

        ],
        code: [
            {
                
            }
        ]
    },
    {
        id: '2',
        title: 'PC AUTO',
        subtitle: 'Sistema de gestão para oficina mecânica em Python',
        content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...',
        images: [
            'https://exemplo.com/pcauto-diagrama.png',
            'https://exemplo.com/pcauto-interface.jpg'
        ],
        code: [
            {

            }
        ]
    },
    {
        id: '3',
        title: 'Internship',
        subtitle: 'Experiências de estágio em desenvolvimento',
        content: 'But I must explain to you how all this mistaken idea...',
        images: [],
        code: [
            {
                language: 'sql',
                content: `-- Exemplo de query otimizada
SELECT clientes.nome, COUNT(ordens_servico.id) AS total_os
FROM clientes
LEFT JOIN ordens_servico 
  ON clientes.id = ordens_servico.cliente_id
GROUP BY clientes.nome
HAVING total_os > 5;`
            }
        ]
    }
];