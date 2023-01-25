import { IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonBackButton, IonButton, useIonAlert, IonItemSliding, IonItemOptions } from "@ionic/react";
import { useState } from "react";
interface Props {
    items: string[];
}
export const ToDoList = (props: Props) => {

    const [todos, setTodos] = useState<string[]>(props.items);
    const [newTodo, setNewTodo] = useState<string>("");
    const [emptyAlert] = useIonAlert();

    const handleSlide = (event: any, index: number) => {
        if (event.detail.amount > 100) {
            handleDelete(index);
        }
    };
    const handleChange = (event: any) => {
        setNewTodo(event.target.value);
    };

    const handleDelete = (index: number) => {
        setTodos(todos.filter((item, i) => i !== index));
    };

    const addTodo = () => {
        if (newTodo === "") {
            emptyAlert({
                header: "Erreur",
                message: "Vous devez saisir un todo",
                buttons: ["OK"],
            });
            return;
        }
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
    return (
        <IonList>
            {
                todos.map((item, index) => {
                    return (
                        <IonItemSliding key={index} onIonDrag={(event)=>handleSlide(event, index)}>
                            <IonItem key={index}>
                                <IonCheckbox key={"cb"+index} slot="start"></IonCheckbox>
                                <IonLabel>{item}</IonLabel>
                                <IonButton slot="end" onClick={()=>handleDelete(index)}>Supprimer</IonButton>
                            </IonItem>
                            <IonItemOptions side="end">supprimer</IonItemOptions>
                        </IonItemSliding>

                        
                    );
                })
            }
            <IonItem>
                <IonInput placeholder="Add new item" onIonChange={handleChange} value={newTodo} />
            </IonItem>
            <IonItem>
                <IonButton onClick={addTodo}>Ajouter un nouveau Todo</IonButton>
            </IonItem>
        </IonList>
    );
};