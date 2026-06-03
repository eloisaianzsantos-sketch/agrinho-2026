/* ANIMAÇÕES */

.card,
.section h2,
.section p {
    opacity: 0;
    transform: translateY(30px);
    transition: all .8s ease;
}

.mostrar {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

/* BOTÃO TOPO */

#voltarTopo {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 50%;
    background: #2e7d32;
    color: white;
    font-size: 22px;
    cursor: pointer;
    display: none;
    box-shadow: 0 5px 15px rgba(0,0,0,.2);
    transition: .3s;
    z-index: 999;
}

#voltarTopo:hover {
    background: #1b5e20;
    transform: scale(1.1);
}