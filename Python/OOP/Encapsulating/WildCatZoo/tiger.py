from WildCatZoo.animal import Animal


class Tiger(Animal):
    def __init__(self, name, gender, age):
        super().__init__(name, gender, age)
        self.money_for_care=45