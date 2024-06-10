import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Inserir dois comentários', () => {
        const comentarios = ['Gostei muito', 'Showwwww'];
        render(<PostComment/>);

        comentarios.map((comentario) => {
            fireEvent.change(screen.getByTestId('campo-comentario'), {
                target: { value: comentario,}
            });
            fireEvent.click(screen.getByTestId('botao-enviar'))
        })
        expect(screen.getByText('Showwwww')).toBeInTheDocument()
    })
});