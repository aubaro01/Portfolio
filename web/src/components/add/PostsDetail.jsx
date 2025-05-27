import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../data/data';
import CodeBlock from './codeblock';

const PostDetails = () => {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="container my-5 text-center">
                <h3 className="text-danger mb-4">Post não encontrado.</h3>
                <Link to="/blog" className="btn btn-primary">
                    Voltar para a lista
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="mb-5">
                <h1 className="fw-bold display-5 mb-3">{post.title}</h1>
                {post.subtitle && <h2 className="fs-4">{post.subtitle}</h2>}
            </div>

            <div className="row gy-5">
                <div className={post.images?.length ? "col-lg-8" : "col-12"}>
                    <article className="fs-5 lh-lg" style={{ textAlign: 'justify' }}>
                        {post.content}
                    </article>

                    {post.code?.map((snippet, index) => (
                        <div key={`code-${index}`} className="my-5">
                            <CodeBlock
                                language={snippet.language}
                                content={snippet.content}
                            />
                        </div>
                    ))}
                </div>

                {post.images?.length > 0 && (
                    <div className="col-lg-4">
                        <div className="sticky-lg-top" style={{ top: '2rem' }}>
                            <div className="d-flex flex-column gap-4">
                                {post.images.map((img, index) => (
                                    <div
                                        key={`img-${index}`}
                                        className={`shadow-lg rounded-3 overflow-hidden ${index % 2 === 0 ? 'ps-lg-3' : 'pe-lg-3'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${post.title} - Imagem ${index + 1}`}
                                            className="img-fluid"
                                            style={{
                                                maxHeight: '500px',
                                                width: '100%',
                                                objectFit: 'cover',
                                                cursor: 'zoom-in'
                                            }}
                                            onClick={() => window.open(img, '_blank')}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-5 text-center">
                <Link to="/blog" className="btn btn-primary px-5 py-2">
                    ←
                </Link>
            </div>
        </div>
    );
};

export default PostDetails;