from GYM.customer import Customer
from GYM.equipment import Equipment
from GYM.exercise_plan import ExercisePlan
from GYM.subscription import Subscription
from GYM.trainer import Trainer


class Gym:
    id = 1

    def __init__(self):
        self.customers = []
        self.trainers = []
        self.equipment = []
        self.plans = []
        self.subscriptions = []
        self.id = Gym.id

        Gym.id += 1

    def add_customer(self, customer: Customer):
        if customer not in self.customers:
            self.customers.append(customer)

    def add_trainer(self, trainer: Trainer):
        if trainer not in self.trainers:
            self.trainers.append(trainer)

    def add_equipment(self, equipment: Equipment):
        if equipment not in self.equipment:
            self.equipment.append(equipment)

    def add_plan(self, plan: ExercisePlan):
        if plan not in self.plans:
            self.plans.append(plan)

    def add_subscription(self, subscription: Subscription):
        if subscription not in self.subscriptions:
            self.subscriptions.append(subscription)

    def subscription_info(self, subscription_id):
        subscription = [s for s in self.subscriptions if s.id == subscription_id][0]
        customer = [c for c in self.customers if c.id == subscription.customer_id][0]
        trainer = [t for t in self.trainers if t.id == subscription.trainer_id][0]

        plan = [p for p in self.plans if p.id == subscription.exercise_id][0]
        equipment = [e for e in self.equipment if e.id == plan.equipment_id][0]
        result = [subscription.__repr__(),
                  customer.__repr__(),
                  trainer.__repr__(),
                  equipment.__repr__(),
                  plan.__repr__()]
        return "\n".join(result)
