<template>
    <div class="w-[45%] relative self-end">
        <img class="shine-effect absolute w-[45rem] -left-44 bottom-16 mix-blend-screen" src="@/assets/images/light_effect.png" />
        <img class="floating-effect w-[26rem] absolute -left-12 bottom-0 z-50" src="@/assets/images/woman_expert.png" />

        <div class="absolute left-5 bottom-[30rem] scale-90 z-40">
            <NotificationSale class="notificationSale opacity-0" style="animation-delay: 1s" />
        </div>
        <div class="absolute left-56 bottom-72 scale-75 z-50">
            <NotificationSale class="notificationSale opacity-0" style="animation-delay: 3s" />
        </div>
        <div class="absolute left-44 bottom-16 z-50">
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