<template>
    <div class="h-[33rem] sm:h-[40rem] lg:h-[45rem] flex relative lg:self-end translate-y-3 lg:translate-y-0 lg:-translate-x-12 lg:z-[60] lg:overflow-y-clip">
        <img class="shine-effect absolute w-[45rem] -left-12 bottom-52 mix-blend-screen" src="@/assets/images/light_effect.png" />
        <img class="floating-effect w-72 sm:w-80 lg:w-[25rem] self-end z-50" src="@/assets/images/woman_expert.png" />

        <div class="absolute left-5 bottom-96 lg:bottom-[30rem] scale-75 sm:scale-90 z-40">
            <NotificationSale class="notificationSale opacity-0" style="animation-delay: 1s" />
        </div>
        <div class="absolute left-10 sm:left-36 lg:left-52 bottom-72 scale-50 sm:scale-75 z-50">
            <NotificationSale class="notificationSale opacity-0" style="animation-delay: 3s" />
        </div>
        <div class="absolute -left-5 sm:left-32 lg:left-44 bottom-16 z-50 scale-75 sm:scale-90 lg:scale-100">
            <NotificationSale class="notificationSale opacity-0"  style="animation-delay: 5s" />
        </div>
    </div>
</template>

<style scoped>
    .floating-effect {
        animation: floating 8s ease infinite
    }

    @keyframes floating {
        0% {
           transform: translateY(0);
        }
        50% {
            transform: translateY(15px)
        }
        100% {
            transform: translateY(0)
        }
    }

    .shine-effect {
        animation: shine 5s infinite;
        transform: scale(.75);
    }

    @keyframes shine {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.85)
        }
        100% {
            transform: scale(1);
        }
    }

    .notificationSale {
        animation: swipingUp 5s infinite;
    }

    @keyframes swipingUp {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.8;
            transform:translateY(-50px);
            filter: drop-shadow(0px 10px 10px rgba(0,0,0,.3));
        }
        100% {
            opacity: 0;
            transform:translateY(-60px);
        }

    }
</style>