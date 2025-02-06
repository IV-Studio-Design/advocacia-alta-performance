<template>
    <section class="w-full bg-gradient-to-r from-lightPeach to-pastelOrange relative overflow-x-clip">
        <div class="w-full h-full flex gap-3 justify-center items-center bg-[url('@/assets/images/building_bg.png')] bg-cover bg-center">
            <div class="w-96 h-full relative self-end">
                <img class="w-[40rem] absolute bottom-44 -right-10 mix-blend-screen z-40" src="@/assets/images/light_effect.png" />
                <img class="w-[25rem] absolute bottom-0 right-0 z-50" src="@/assets/images/statue.png">
            </div>
            <div class="space-y-10 py-20 z-50">
                <p class="font-poppins font-light text-lg leading-5">
                    Descubra como transformar a internet <br>
                    em sua maior aliada para <i class="font-semibold">alavancar exponencialmente <br>
                    o crescimento do seu escritório.</i> utilizando uma estrátegia <br>
                    testada e aprovada por mim e meus mentorados, com <br>
                    resultados comprovados.
                </p>
                <div class="flex justify-start items-start">
                    <div class="grid gap-x-4 gap-y-5 grid-cols-2">
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <img class="w-7" src="@/assets/images/icons/money-bag.svg" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Saiba como faturei um milhão <br>
                                    de reais em cinco meses o meu <br>
                                    escritório de advocacia.
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl px-2 py-3">
                            <IconsCog width="32" height="32" fill="#000" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Aprenda a sair de mero operador <br>
                                    do Direito e passe a ser gestor, <br>
                                    com mais tempo para a sua família <br>
                                    e liberdade diária.
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <img class="w-8" src="@/assets/images/icons/networking.svg" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Amplie seu networking com <br>
                                    uma comunidade de advogados <br>
                                    bem sucedidos de todo o Brasil;
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <IconsReceipt width="32" height="32" fill="#000" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Fure a bolha dos 30 mil mensais <br>
                                    e aplique minha orientações <br>
                                    diárias para chegar ao próximo <br>
                                    nível de faturamento.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <p class="font-poppins font-light text-lg leading-5">
                    Dê o primeiro passo rumo á transformação do seu escritório. <br>
                    <i class="font-semibold">Agende agora uma sessão de diagnóstico exclusivo</i> com <br>
                    nosso time e descubra os passos essenciais para ingressar <br>
                    definitivamente na <i class="font-semibold">Advocacia de Alta de Performance.</i>
                </p>
                <a href="#" class="w-96 bg-neutral-700 text-lightPeach advocacia-button">
                    Agendar minha sessão de diagnóstico
                    <IconsArrowForward width="22" height="22" stroke="#ffd4b5" />
                </a>
            </div>
        </div>

        <div class="w-full absolute bottom-0">
            <div class="max-w-4xl relative mx-auto">
                <img class="w-[50rem] absolute -bottom-[30rem] -right-[26rem] mix-blend-screen opacity-90 z-40" src="@/assets/images/light_effect.png" />
            </div>
        </div>
    </section>
</template>